interface FullCredits {
  cast: Cast[];
  crew: Crew[];
}

interface Cast {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  character: string;
  roles: Role[];
}

interface Crew {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  jobs: Job[];
  job: string;
  department: string;
}

interface Role {
  character: string;
  episode_count: number;
  total_episode_count: number;
}

interface Job {
  job: string;
  episode_count: number;
}

function Credits({ credits }: { credits: FullCredits }) {
  return <div></div>;
}

export default Credits;
