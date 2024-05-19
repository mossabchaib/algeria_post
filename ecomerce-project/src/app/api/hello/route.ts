import ConectMongodb from '../../../utile/ConectMongodb'
ConectMongodb()
export async function GET(request: Request) {
    return new Response('Hello, Next.js!')
  }