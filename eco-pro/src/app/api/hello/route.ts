import User from '@/Models/user'
import connectMongoDB from '../../../utile/ConectMongodb'
import ConectMongodb from '../../../utile/ConectMongodb'
import { NextResponse } from 'next/server'
ConectMongodb()
export async function GET(request: Request) {
  await connectMongoDB
  const users=User.find();
  return users;
  }