const readyStateHandler = (xhr, method = 'GET', successStatus = 200) => () => {
  if (xhr.readyState !== 4) {
    return;
  }

  if (xhr.status === successStatus) {
    console.log(`result ${method}`, xhr.responseText);
  } else {
    console.log(`error ${method}`, xhr.responseText);
  }
};

// GET
const xhrGet = new XMLHttpRequest();
xhrGet.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

xhrGet.send();

xhrGet.onreadystatechange = readyStateHandler(xhrGet);

// POST - створює об'єкт
const xhrPost = new XMLHttpRequest();

const json = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
});

xhrPost.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhrPost.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhrPost.send(json);

xhrPost.onreadystatechange = readyStateHandler(xhrPost, 'POST', 201);

// PUT - змінює об'єкт
const xhrPut = new XMLHttpRequest();

const jsonPut = JSON.stringify({
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1,
});

xhrPut.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1');
xhrPut.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhrPut.send(jsonPut);

xhrPut.onreadystatechange = readyStateHandler(xhrPut, 'PUT');

// PATCH - змінює проперті
const xhrPatch = new XMLHttpRequest();

const jsonPatch = JSON.stringify({
  title: 'OLEH',
});

xhrPatch.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/1');
xhrPatch.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhrPatch.send(jsonPatch);

xhrPatch.onreadystatechange = readyStateHandler(xhrPatch, 'PATCH');

// DELETE
const xhrDelete = new XMLHttpRequest();

xhrDelete.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
xhrDelete.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhrDelete.onreadystatechange = readyStateHandler(xhrDelete, 'DELETE');
