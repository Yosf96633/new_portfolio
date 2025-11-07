export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      className="h-28 w-full text-border"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 615 259"
      {...props}
    >
      <path
        fill="currentcolor"
        d="M0 0h64v256h-64zM64 64h64v64h-64zM128 128h64v64h-64zM192 64h64v64h-64zM256 0h64v256h-64zM345 0h64v64h-64zM385 64h64v64h-64zM448 128h64v128h-64zM512 64h64v64h-64zM554 0h64v64h-64z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
