#!/bin/bash

function run() {
  tmux select-pane -t $1
  tmux send-keys "$2" C-m
}

if [[ $TMUX ]]; then
  tmux new-window
  tmux splitw -v -p 20
  tmux bind q kill-session
  run 0 "npm run dev"
  run 1 "nginx -p $(pwd) -c $(pwd)/nginx.conf"
else
  tmux -CC new-session $0
fi
