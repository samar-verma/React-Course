
function List ({a}) {
    
    return (<>
    {a.map((n) => (
        <div class="row kg-row"> 
    <div class="col-6">
    <p>{n.name}</p>
 </div>

<div class="col-4">
<p>{n.age}</p>
</div>
<div class="col-2">
<button type="button" class="btn btn-danger kg-button">delete</button>
</div>
</div>
    ))}
     </>
  );
}

export default List;