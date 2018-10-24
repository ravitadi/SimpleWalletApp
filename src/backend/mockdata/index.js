// Make a call to service for server side rendering.
import FundModel from '../models/FundModel'

const funds = [
  new FundModel('Paypal', 'self', {source: 'Paypal Balance', accountType:'Balance', availableBalance: {amount:'100.00', currency: '$' }}, true),
  new FundModel('Bank','123',  {source: 'Bank of America', accountType:'Checking'}),
  new FundModel('Bank', '213', {source: 'Chase', accountType: 'Checking'}),
  new FundModel('Card', '321', {source: 'visa', lastDigts: '1234', accountType: 'Credit'})
]

export default funds
