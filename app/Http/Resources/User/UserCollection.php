<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Request;
use App\Http\Resources\BaseCollection;

class UserCollection extends BaseCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }
}
