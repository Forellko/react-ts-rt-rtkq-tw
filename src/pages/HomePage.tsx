import React, { useEffect } from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';

export default function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('forellko');
  return <div>HomePage</div>;
}
