<?php

namespace App\Helpers;

use Kreait\Firebase\Factory;

class FirebaseService
{
    protected $firebase;

    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        $this->firebase = (new Factory)->withServiceAccount(storage_path('app/firebase.json'));
    }

    public function messaging()
    {
        return $this->firebase->createMessaging();
    }
}
