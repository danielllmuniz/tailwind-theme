// https://transform.tools to generate this svg
export function Logo() {
  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-950 dark:text-zinc-100">
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 1024 1024"
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M832 384l8 1.6-1.6 8 1.6 3.2-4.8 3.2-44.8 161.6-16-4.8 40-147.2-260.8 144-158.4 284.8L384 832l-6.4 6.4-176-176 11.2-11.2L376 814.4l147.2-265.6-294.4-297.6L240 240v-8h9.6l3.2-3.2 3.2 3.2 408-24 1.6 16-395.2 22.4 278.4 278.4 276.8-153.6L832 384z"
          fill="#050D42"
        />
        <path
          d="M896 384c0 35.2-28.8 64-64 64s-64-28.8-64-64 28.8-64 64-64 64 28.8 64 64zm-656-32c-62.4 0-112-49.6-112-112s49.6-112 112-112 112 49.6 112 112-49.6 112-112 112zm304 336c-80 0-144-64-144-144s64-144 144-144 144 64 144 144-64 144-144 144zM320 832c0-35.2 28.8-64 64-64s64 28.8 64 64-28.8 64-64 64-64-28.8-64-64zM176 656c0-17.6 14.4-32 32-32s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32zm448-440c0-22.4 17.6-40 40-40s40 17.6 40 40-17.6 40-40 40-40-17.6-40-40zm112 344c0-27.2 20.8-48 48-48s48 20.8 48 48-20.8 48-48 48-48-20.8-48-48z"
          fill="#2F4BFF"
        />
      </svg>
      <span>Default model</span>
    </strong>
  )
}
