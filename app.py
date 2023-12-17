from flask import Flask, Response, request
import uuid

import main

app = Flask(__name__)

data = [
  # {'id':1, 'isHuman': False,'content':'How can I help you today?'},
  # {'id':2, 'isHuman': True,'content':'Tell me about Kenneth Choi'},
  # {'id':3, 'isHuman': False,'content':f"Sure, Kenneth Choi is a software engineer with a passion for building products. He is ready to hit the ground running and I'm confident that he will make a valuable asset to the team. He looks forward to chatting and to learn more about any potential opportunities that could be a good fit."},
  # {'id':4, 'isHuman': True,'content': 'Awesome, thanks for the info. What does he like to do for fun?'},
  # {'id':5, 'isHuman': False,'content': "Kenneth's hobbies include running, cooking, playing chess, and spending time with family and friends."},
  # {'id':6, 'isHuman': True,'content':'Tell me about Kenneth Choi'},
  # {'id':7, 'isHuman': False,'content':'How can I help you today?'},
  {'id':8, 'isHuman': True,'content':'Tell me about Kenneth Choi'},
  {'id':9, 'isHuman': False,'content':f"Sure, Kenneth Choi is a software engineer with a passion for building products. He is ready to hit the ground running and I'm confident that he will make a valuable asset to the team. He looks forward to chatting and to learn more about any potential opportunities that could be a good fit. Sure, Kenneth Choi is a software engineer with a passion for building products. He is ready to hit the ground running and I'm confident that he will make a valuable asset to the team. He looks forward to chatting and to learn more about any potential opportunities that could be a good fit. Sure, Kenneth Choi is a software engineer with a passion for building products. He is ready to hit the ground running and I'm confident that he will make a valuable asset to the team. He looks forward to chatting and to learn more about any potential opportunities that could be a good fit. Sure, Kenneth Choi is a software engineer with a passion for building products. He is ready to hit the ground running and I'm confident that he will make a valuable asset to the team. He looks forward to chatting and to learn more about any potential opportunities that could be a good fit. Sure, Kenneth Choi is a software engineer with a passion for building products. He is ready to hit the ground running and I'm confident that he will make a valuable asset to the team. He looks forward to chatting and to learn more about any potential opportunities that could be a good fit."},
  # {'id':10, 'isHuman': True,'content': 'Awesome, thanks for the info. What does he like to do for fun?'},
  # {'id':11, 'isHuman': False,'content': "Kenneth's hobbies include running, cooking, playing chess, and spending time with family and friends."},
  ]

json_chat_history = []

@app.get('/api/data')
def get_data():
  return {'data': json_chat_history}

@app.get('/api/mock')
def get_mock_data():
  return {'data': data}

@app.post('/api/data')
def create_query():
  request_data = request.get_json()
  query_string = request_data['query']  
  response = main.send_query(query_string, json_chat_history)
  
  print('chat_history: ', json_chat_history)
  return {'data': response}, 201

@app.get('/api/reset')
def reset_data():
  main.reset_chat_history()
  json_chat_history.clear()
  return {'data': []}, 201


  # new_message = {
  #   'id': uuid.uuid4(),
  #   'sender': 'Human',
  #   'content': request_data['query']
  # }
  
  # print('new_message: ', new_message)
  # data.append(new_message)
  # print('data: ', data)
  # return new_message, 201