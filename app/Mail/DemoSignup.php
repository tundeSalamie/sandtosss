<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DemoSignup extends Mailable
{
    use Queueable, SerializesModels;

    public $waitlist;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($waitlist)
    {
        $this->waitlist = $waitlist;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // return $this->view('view.demosignup');
        return $this->from('noreply@tosss.me')->subject('Thank You For Signing Up')->view('demosignup');

    }
}
