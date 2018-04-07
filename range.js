'use sctrict';

function* range (start=0, stop, step=1)
{
    if (stop == undefined)
    {
        stop = start;
        start = 0;
    }
        

    while(step > 0 ? start < stop : start > stop)
    {
        yield start;
        start += step;
    }
}

module.exports = range