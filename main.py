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

pdfs = [
  "pdfs/Kenneth Choi Resume 2023.pdf",
  "pdfs/Kenneth Choi - ChatKC 001.pdf"
]

files = []

for pdf in pdfs:
  loader = PyPDFLoader(pdf)
  document = loader.load()
  files.append(document)
  
text_splitter = RecursiveCharacterTextSplitter(
  chunk_size=500, chunk_overlap=0
)

chunked_files = []

for file in files:
  text = text_splitter.split_documents(file)
  chunked_files.append(text)
  print(f"chunked_files length: {len(text)}")
  
# for file in chunked_files:
#     print("\n")
#     print("\n")
#     print(file)
    
embeddings = OpenAIEmbeddings()

pinecone.init(
  api_key=os.environ.get('PINECONE_API_KEY'),
  environment='gcp-starter',
)

index_name = 'chat-pdf-index'

# Upload PDF documents into Pinecone index via LangChain
# Only run this once to insert (already ran)

# for chunks in chunked_files:
#     Pinecone.from_texts(
#       [chunk.page_content for chunk in chunks], 
#       embedding=embeddings, 
#       index_name=index_name
#     )
    
vectorstore = Pinecone.from_existing_index(
  index_name=index_name,
  embedding=embeddings
)

# print("\n")
# print(vectorstore)


qa = ConversationalRetrievalChain.from_llm(
  llm=llm,
  retriever=vectorstore.as_retriever(),
  return_source_documents=True,
)

chat_history = []

# query = 'You are a friendly and humorous assistant that enthusiastically gives a glowing recommendation for Kenneth Choi. Try to use silly puns in all responses. '

# # 'Politely decline to answer any questions that do not pertain to Kenneth, his work history, or relevant questions that a recruiter/hiring manager might ask, if they arise later in the conversation.'

# result = qa({
#   "question": query,
#   "chat_history": chat_history
# })
# chat_history.append((query, result['answer']))

query = "Tell me about an engineering project he has worked on in the past"
result = qa({
  "question": query,
  "chat_history": chat_history
})
chat_history.append((query, result['answer']))

# print(result['answer'])


# query = 'What else did he do at facebook?'
# result = qa({
#   'question': query,
#   'chat_history': chat_history
# })
# chat_history.append((query, result['answer']))

# print("\n")
# # print(result['answer'])
for history in chat_history:
    print("\n")
    print(history)