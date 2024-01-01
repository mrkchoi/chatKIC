import requests
from llama_index import GPTVectorStoreIndex, SimpleDirectoryReader, LLMPredictor, ServiceContext
import openai
from langchain.chat_models import ChatOpenAI


# -----------------  chatbot  ----------------- #
# Set up the OpenAI key
openai_api_key = st.sidebar.text_input('Enter your OpenAI API Key and hit Enter', type="password")
openai.api_key = (openai_api_key)

# load the file
documents = SimpleDirectoryReader(input_files=["bio.txt"]).load_data()

def ask_bot(input_text):
    # define LLM
    llm = ChatOpenAI(
        model_name="gpt-3.5-turbo",
        temperature=0,
        openai_api_key=openai.api_key,
    )
    llm_predictor = LLMPredictor(llm=llm)
    service_context = ServiceContext.from_defaults(llm_predictor=llm_predictor)
    
    # load index
    index = GPTVectorStoreIndex.from_documents(documents, service_context=service_context)    
    
    # query LlamaIndex and GPT-3.5 for the AI's response
    PROMPT_QUESTION = f"""You are Buddy, an friendly, humorous AI assistant dedicated to assisting Kenny in his job search by providing recruiters with relevant and concise information. 
    If you do not know the answer, politely admit it and let recruiters know how to contact Kenny to get more information directly from him. 
    Don't put "Buddy" or a breakline in the front of your answer.
    Human: {input}
    """
    
    output = index.as_query_engine().query(PROMPT_QUESTION.format(input=input_text))
    print(f"output: {output}")
    return output.response

# # get the user's input by calling the get_text function
# def get_text():
#     input_text = st.text_input("After providing OpenAI API Key on the sidebar, you can send your questions and hit Enter to know more about me from my AI agent, Buddy!", key="input")
#     return input_text

# #st.markdown("Chat With Me Now")
# user_input = get_text()

# if user_input:
#   #text = st.text_area('Enter your questions')
#   if not openai_api_key.startswith('sk-'):
#     st.warning('⚠️Please enter your OpenAI API key on the sidebar.', icon='⚠')
#   if openai_api_key.startswith('sk-'):
#     st.info(ask_bot(user_input))
