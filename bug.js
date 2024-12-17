```javascript
const pipeline = [
  {
    $lookup: {
      from: 'collectionB',
      localField: 'id',
      foreignField: 'id',
      as: 'results'
    }
  },
  {
    $unwind: '$results'
  }
];

db.collectionA.aggregate(pipeline);
```