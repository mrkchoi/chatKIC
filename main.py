import uuid
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import pinecone
from langchain.vectorstores.pinecone import Pinecone
# from langchain.vectorstores.chroma import Chroma
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chains import ConversationalRetrievalChain
from langchain.llms.openai import OpenAI

from langchain.prompts import SystemMessagePromptTemplate, HumanMessagePromptTemplate, ChatPromptTemplate
# from tqdm.autonotebook import tqdm
from dotenv import load_dotenv

import pinecone
import os

load_dotenv()

llm = OpenAI()
embeddings = OpenAIEmbeddings()

pinecone.init(
  api_key=os.environ.get('PINECONE_API_KEY'),
  environment='gcp-starter',
)

index_name = 'chat-pdf-index'    
vectorstore = Pinecone.from_existing_index(
  index_name=index_name,
  embedding=embeddings
)

qa_system_template = """
Answer the question as a friendly, humourous assistant that gives an enthusiastic recommendation for Kenneth Choi with funny puns. Politely decline to answer questions that do not relate to Kenneth, his career, his interests and hobbies, and anything relevant to the context - but do not give information not mentioned in the context information. Do not respond starting with your title, only send the response.
----------------
{context}"""

messages = [
  SystemMessagePromptTemplate.from_template(qa_system_template),
  HumanMessagePromptTemplate.from_template("{question}"),
  
]

qa_system_prompt = ChatPromptTemplate.from_messages(messages)

qa = ConversationalRetrievalChain.from_llm(
  llm=llm,
  retriever=vectorstore.as_retriever(),
  return_source_documents=True,
  verbose=True,
  combine_docs_chain_kwargs={"prompt": qa_system_prompt}
)

# qa = ConversationalRetrievalChain.from_llm(
#   llm=llm,
#   retriever=vectorstore.as_retriever(),
#   return_source_documents=True,
# )

chat_history = []

def send_query(query_string, json_chat_history):
  print('query_string: ', query_string)
  print('chat_history: ', chat_history)
  result = qa({
    "question": query_string,
    "chat_history": chat_history
  })
  json_chat_history.append({
    'id': uuid.uuid4(), 
    'isHuman': True,
    'content': query_string
  })
  json_chat_history.append({
    'id': uuid.uuid4(), 
    'isHuman': False,
    'content': result['answer']
    })
  chat_history.append((query_string, result['answer']))
  
def reset_chat_history():
  chat_history.clear()
  
# send_query('You are a friendly and humorous assistant that enthusiastically gives a glowing recommendation for software engineer Kenneth Choi.')
# query = 'You are a friendly and humorous assistant that enthusiastically gives a glowing recommendation for Kenneth Choi. Try to use silly puns in all responses. '

# # 'Politely decline to answer any questions that do not pertain to Kenneth, his work history, or relevant questions that a recruiter/hiring manager might ask, if they arise later in the conversation.'

# result = qa({
#   "question": query,
#   "chat_history": chat_history
# })
# chat_history.append((query, result['answer']))

# query = "Tell me about an engineering project he has worked on in the past"
# result = qa({
#   "question": query,
#   "chat_history": chat_history
# })
# chat_history.append((query, result['answer']))

# print(result['answer'])


# query = 'What else did he do at facebook?'
# result = qa({
#   'question': query,
#   'chat_history': chat_history
# })
# chat_history.append((query, result['answer']))

# print("\n")
# # print(result['answer'])
# for history in chat_history:
#     print("\n\n")
#     print(history)