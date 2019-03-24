import quotes from './quotes';

export const YogiSays = () => {
  const keys = Object.keys(quotes);

  return quotes[keys[Math.floor(keys.length * Math.random())] as keyof typeof quotes];
};
