export const API_END_POINT =
  'https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/';

export const getAutoCompleteList = async (movieTitle: string) => {
  try {
    const res = await fetch(
      `${API_END_POINT}autocomplete?value=${movieTitle}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.ok) {
      return await res.json();
    }

    throw new Error('API Error');
  } catch (e: unknown) {
    alert(e);
  }
};
