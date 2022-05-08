import { CloseButton } from "../../CloseButton"
import successImageUrl from "../../../assets/success.svg"

interface FeedbackSuccessProps {
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested
}: FeedbackSuccessProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="ícone de sucesso" />

        <span className="text-xl text-zinc-800 dark:text-zinc-100 mt-2">
          Agradecemos o feedback!
        </span>

        <button
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-100 dark:bg-zinc-800 rounded-md border-transparent text-sm text-zinc-500 dark:text-zinc-400 leading-6 hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        >
          Enviar outro feedback
        </button>
      </div>
    </>
  )
}
