function GetNewArray(array)
{
    let tempArr;
    while (array.indexOf(0) !== -1) 
    {
        array.splice(items.indexOf(0), 1);
        tempArr.Push(0);
    };
     array.Push(tempArr); 
     return array;
}

