export default function Loading() {
  return (
    <div className="container-x flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-steel-200 border-t-brand" role="status" aria-label="Loading" />
    </div>
  );
}
