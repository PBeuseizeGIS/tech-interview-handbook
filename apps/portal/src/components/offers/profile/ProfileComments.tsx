import { ClipboardDocumentIcon, ShareIcon } from '@heroicons/react/24/outline';
import { Button, Spinner, TextArea } from '@tih/ui';

import ExpandableCommentCard from './comments/ExpandableCommentCard';

type ProfileHeaderProps = Readonly<{
  handleCopyEditLink: () => void;
  handleCopyPublicLink: () => void;
  isDisabled: boolean;
  isEditable: boolean;
  isLoading: boolean;
}>;

export default function ProfileComments({
  handleCopyEditLink,
  handleCopyPublicLink,
  isDisabled,
  isEditable,
  isLoading,
}: ProfileHeaderProps) {
  function handleReply(replayingToId: string, userId: string) {
    return replayingToId + userId; // To integrate with API
  }
  if (isLoading) {
    return (
      <div className="col-span-10 pt-4">
        <Spinner display="block" size="lg" />
      </div>
    );
  }
  return (
    <div className="m-4">
      <div className="flex-end flex justify-end space-x-4">
        {isEditable && (
          <Button
            addonPosition="start"
            disabled={isDisabled}
            icon={ClipboardDocumentIcon}
            isLabelHidden={false}
            label="Copy profile edit link"
            size="sm"
            variant="secondary"
            onClick={handleCopyEditLink}
          />
        )}
        <Button
          addonPosition="start"
          disabled={isDisabled}
          icon={ShareIcon}
          isLabelHidden={false}
          label="Copy public link"
          size="sm"
          variant="secondary"
          onClick={handleCopyPublicLink}
        />
      </div>
      <h2 className="mt-2 text-2xl font-bold">
        Discussions feature coming soon
      </h2>
      <ExpandableCommentCard
        comment={{
          createdAt: new Date(),
          id: '1',
          message: 'Test comment',
          profileId: '123',
          replies: [
            {
              createdAt: new Date(),
              id: '123',
              message: 'Test comment',
              profileId: '123',
              replies: undefined,
              replyingToId: '12345',
              userId: '12314',
              username: 'nihao username',
            },
            {
              createdAt: new Date(),
              id: '12334',
              message: 'Test comment',
              profileId: '123',
              replies: undefined,
              replyingToId: '12345',
              userId: '12314',
              username: 'nihao username',
            },
          ],
          replyingToId: '12345',
          userId: '12314',
          username: 'nihao username',
        }}
        handleReply={handleReply}
      />
      <TextArea label="Comment" placeholder="Type your comment here" />
    </div>
  );
}
