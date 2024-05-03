export function Singletone() {
  const { instance } = Singletone;

  if (instance) return instance;

  Singletone.instance = this;
}
