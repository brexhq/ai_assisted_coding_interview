'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_LATEST_MESSAGES, CREATE_MESSAGE } from '~/graphql/queries';
import type { 
  GetLatestMessagesQuery, 
  CreateMessageMutation
} from '~/generated/graphql';

export default function HelloWorldDashboard() {
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const { data: messagesData, loading: messagesLoading, refetch: refetchMessages } = useQuery<GetLatestMessagesQuery>(GET_LATEST_MESSAGES, {
    variables: { limit: 10 }
  });

  const [createMessage] = useMutation<CreateMessageMutation>(CREATE_MESSAGE);

  const handleCreateMessage = async () => {
    setIsCreating(true);
    setMessage(null);

    try {
      const result = await createMessage();
      if (result.data?.createMessage) {
        setMessage({ 
          type: 'success', 
          text: 'Message created successfully!' 
        });
        refetchMessages();
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'Failed to create message' 
      });
    } finally {
      setIsCreating(false);
    }
  };

  if (messagesLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Brex Interview Playground</h1>
          <p className="text-gray-600">Let's start hacking!</p>
        </div>

        {/* Create Message Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Create Message</h2>
          <button
            onClick={handleCreateMessage}
            disabled={isCreating}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isCreating ? 'Creating...' : 'Create Hello World Message'}
          </button>
        </div>

        {/* Message Display */}
        {message && (
          <div className={`mb-6 p-4 rounded-md ${
            message.type === 'success' 
              ? 'bg-green-100 border border-green-400 text-green-700' 
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            {message.text}
          </div>
        )}

        {/* Messages List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Messages</h3>
          
          {!messagesData?.latestMessages?.length ? (
            <p className="text-gray-500 text-center py-8">No messages yet</p>
          ) : (
            <div className="space-y-3">
              {messagesData.latestMessages.map((message: any) => message && (
                <div key={message.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{message.content}</p>
                    <p className="text-sm text-gray-500">
                      {message.createdAt && new Date(message.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}