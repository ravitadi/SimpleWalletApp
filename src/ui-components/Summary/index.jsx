import React from 'react';

const Content = {
  payWith: 'Pay with'
}

function Summary ({detail}) {
  return (
    <div>
      <h3>{Content.payWith} {detail && detail.data && detail.data.source}</h3>
    </div>)
}

export default Summary
