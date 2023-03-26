export async function GET(request: Request) {
  console.log(request, "here is the request");
  return new Response("Hello, Next.js!");
}
