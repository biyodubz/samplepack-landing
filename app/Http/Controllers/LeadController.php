<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:leads,email'
        ]);

        Lead::create([
            'email' => $request->email
        ]);

        return response()->json([
            'message' => 'Success'
        ]);
    }
}
