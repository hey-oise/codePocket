export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-gray-400 border-4 border-current border-t-transparent opacity-60" />
        <p className="text-sm text-muted-foreground opacity-60 text-white">
          Loading…
        </p>
      </div>
    </div>
  );
}
