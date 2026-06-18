#!/usr/bin/env node
import getBaseGame from '../src/index.js'
import { getGamePrime, rules } from '../src/games/prime.js'
getBaseGame(rules, getGamePrime)
