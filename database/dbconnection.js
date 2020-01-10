const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/biwashDarazApi',
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
