'use strict';

function* range(start: number = 0, stop?: number, step: number = 1): Generator
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

export default range;
