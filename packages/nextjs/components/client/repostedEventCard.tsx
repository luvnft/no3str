import { useProfile } from "../../hooks/scaffold-eth";
import { extractImageLinks } from "../../utils/parsing";
import { type Event, Filter, Relay, UnsignedEvent } from "nostr-tools";

interface RepostedEventCardProps {
  pk: string | null;
  event: Event;
  showEvent: boolean;
  relay: Relay | null;
  getEvents: (filters: Filter[]) => void;
  getEvent: (filter: Filter) => Promise<Event | null | undefined>;
  publishEvent: (event: UnsignedEvent, _sk?: string) => void;
}

export default function RepostedEventCard(props: RepostedEventCardProps) {
  const { data: userData } = useProfile({ pubkey: props.event.pubkey, relay: props.relay as Relay });
  const { txtContent, imgLinks } = extractImageLinks(props.event.content);

  return (
    <div
      className=" overflow-hidden rounded-lg shadow border border-primary hover:cursor-pointer hover:dark:bg-base-300/25 hover:underline hover:dark:decoration-green-300"
      hidden={props.showEvent ? true : false}
      onClick={() => {
        // Filter events to the refrenced event
        const filter: Filter[] = [
          {
            ids: [props.event.id],
          },
        ];
        props.getEvents(filter);
      }}
    >
      <div className="px-4 py-5 sm:px-6">
        <div className="flex flex-row justify-between">
          <img className="inline-block h-8 w-8 rounded-full" src={userData?.picture} alt="" />
          <span className="font-bold text-gray-800 dark:text-gray-200">{userData?.name}</span>
          <span className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
            <svg className="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
              <circle cx="3" cy="3" r="3" />
            </svg>
            {props.event.pubkey.slice(props.event.pubkey.length - 6)}
          </span>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6 w-full">
        <div className="mt-2 w-full">
          <span className="inline-block w-full text-lg text-gray-800 dark:text-gray-200 text-start pl-2 pb-1">
            {txtContent}
            {imgLinks
              ? imgLinks.map((imgLink, i) => {
                  return <img src={imgLink} key={i}></img>;
                })
              : null}
          </span>
        </div>
      </div>
    </div>
  );
}
