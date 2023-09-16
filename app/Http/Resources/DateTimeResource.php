<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DateTimeResource extends JsonResource
{
    /**
     * Undocumented function
     * 
     * datetime = 2023-08-05T02:31:35.000000Z
     * human_diff = 1 day ago
     * human = Sat, Aug 5, 2023 2:31 AM
     * simple = 05/08/2023 02:08:35
     * 
     * @param [type] $request
     * @return void
     */
    public function toArray($request)
    {
        return [
            'datetime' => $this->whenNotNull($this->toISOString()),
            'human_diff' => $this->whenNotNull($this->locale('es_ES')->timezone('Europe/Madrid')->diffForHumans()),
            'human' => $this->whenNotNull($this->locale('es_ES')->timezone('Europe/Madrid')->toDayDateTimeString()),
            'simple' => $this->whenNotNull($this->locale('es_ES')->timezone('Europe/Madrid')->format('d/m/Y h:m:s')),
        ];
    }
}