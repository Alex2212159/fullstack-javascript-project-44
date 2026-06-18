#!/usr/bin/env node
import getBaseGame from '../src/index.js'
import { getDivisor, rules } from '../src/games/gcd.js'
getBaseGame(rules, getDivisor)
