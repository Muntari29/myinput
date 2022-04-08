/**
 * 대문자로 시작하는 이유 -> 유틸리티 함수로서 여러군대에서 사용이 가능한데,
 * 해당 함수는 해당 컴포넌트에 선언된 함수와 구분하기 위해 대문자로 시작하는 경우가 있음.
 */

export default function Debounce<Params extends any[]>(
  fn: (...args: Params) => any,
  ms: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
}
