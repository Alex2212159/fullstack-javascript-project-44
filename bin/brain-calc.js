#!/usr/bin/env node
import getBaseGame from '../src/index.js'
import { getExpression, userRule } from '../src/games/calc.js'
getBaseGame(userRule, getExpression)
