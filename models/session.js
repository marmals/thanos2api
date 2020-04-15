const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SessionSchema = new Schema({
    startDate:{
        type: Date,
        default: Date.now
    },
    stopDate:{
        type: Date,
        default: null
    },
    locations:[
        {
            x:{
                type: Number,
            },
            y:{
                type: Number,
            }
        }
    ],
    collisions:[
        {
            x:{
                type: Number,
            },
            y:{
                type: Number,
            }
        }
    ]
});

module.exports = Session = mongoose.model('Session', SessionSchema);