#!/usr/bin/env node
import getBaseGame from '../src/index.js'
import { getProgressionNum, rules } from '../src/games/progression.js'
getBaseGame(rules, getProgressionNum)
