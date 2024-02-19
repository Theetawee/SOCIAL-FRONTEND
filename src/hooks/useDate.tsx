import { formatDistanceToNow } from "date-fns";

interface UseDate {
    naturalDay: (dateString: string) => string;
}

const useDate = (): UseDate => {
    const naturalDay = (dateString: string) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    };

    return { naturalDay };
};

export default useDate;
