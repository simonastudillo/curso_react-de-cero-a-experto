export const CustomFullScreenLoading = () => {
   return (
      <div className="flex h-screen w-screen items-center justify-center">
         <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
            <span className="text-lg font-medium text-primary">Espere un momento...</span>
         </div>
      </div>
   )
}