#!/usr/bin/env node
import getBaseGame from '../src/index.js'
import { rule, funcGame } from '../src/games/game-even.js'
getBaseGame(rule, funcGame)
