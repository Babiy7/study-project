const ObjectModule = (function () {
  const privateVar = 'private var';
  const publicVar = 'public var';

  const privateMethod = () => {
    console.log('private method', privateVar);
  };

  const publicMethod = (isOpen) => {
    console.log('public method');

    if (isOpen) {
      privateMethod();
    }
  };

  return {
    publicMethod,
    publicVar,
  };
}());

ObjectModule.publicMethod();

console.log(ObjectModule.publicVar);

ObjectModule.publicMethod(true);
