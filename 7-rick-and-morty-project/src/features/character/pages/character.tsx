import useSWR from "swr";
import { useParams } from "react-router-dom";

import { fetcher } from "@/util/fetcher";
import { Label } from "@/components/ui/label";
import type { CharacterType } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Album, Bone, Earth, Heart, VenusAndMars } from "lucide-react";

export const Character = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSWR<CharacterType>(
    `https://rickandmortyapi.com/api/character/${id}`,
    fetcher
  );

  if (error) {
    return <div>Ocurrio un error trayendo los datos</div>;
  }

  if (!data || isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <Skeleton className="w-96 h-96" />
      </div>
    );

  const { name, image, status, gender, species, origin } = data;

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-64 lg:w-96 h-fit">
        <CardHeader>
          <CardContent className="flex flex-col gap-4">
            <img src={image} alt={name} className="rounded-lg" />
            <h3 className="text-center font-bold text-xl">{name}</h3>

            <div className="flex items-center gap-3">
              <Label className="opacity-50">Details</Label>
              <Separator />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm">
              <div className="flex gap-1 items-center">
                {status === "Dead" ? <Bone /> : <Heart />}: {status}
              </div>
              <div className="flex gap-1 items-center">
                <VenusAndMars />: {gender}
              </div>
              <div className="flex gap-1 items-center">
                <Album />: {species}
              </div>
              <div className="flex gap-1 items-center">
                <Earth className="shrink-0" />:{" "}
                <span className="truncate">{origin.name}</span>
              </div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};
