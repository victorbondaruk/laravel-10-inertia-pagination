<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Request;
use App\Http\Resources\DateTimeResource;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin User */
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'email_verified' => new DateTimeResource($this->email_verified_at),
            'created' => new DateTimeResource($this->created_at),
            'updated' => new DateTimeResource($this->updated_at),
        ];
    }
}