import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Poster } from "./MovieMetadata";
import { unixToDate } from "@/lib/utils";

interface MovieCardProps {
    id: number;
    title: string;
    release_date: string;
    duration: number;
    poster: Poster;
    onClick: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
    id,
    duration,
    release_date,
    title,
    poster,
    onClick
}) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={title} src={poster.original_image_url}
                onClick={onClick}
            />}
        >
            <Meta title={title} description={`${duration} phút |  ${unixToDate(+release_date)}`} />
        </Card>
    );
};