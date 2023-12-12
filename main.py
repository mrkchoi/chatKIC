import uuid
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import pinecone
from langchain.vectorstores.pinecone import Pinecone
# from langchain.vectorstores.chroma import Chroma
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chains import ConversationalRetrievalChain
from langchain.llms.openai import OpenAI
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

qa = ConversationalRetrievalChain.from_llm(
  llm=llm,
  retriever=vectorstore.as_retriever(),
  return_source_documents=True,
)

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