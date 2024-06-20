export const useName: () => globalThis.Ref<string> = () => {
  return useState('name', () => 'saddam');
};
