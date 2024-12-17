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
    $match: { 'results.id': { $exists: true } }
  },
  {
    $unwind: '$results'
  }
];

db.collectionA.aggregate(pipeline);
```