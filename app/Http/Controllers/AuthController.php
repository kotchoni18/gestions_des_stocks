<?php 
namespace App\Http\Controllers;

use App\Models\User;
use Clicalmani\Cookie\Cookie;
use Clicalmani\Foundation\Acme\Controller;
use Clicalmani\Foundation\Http\RequestInterface;
use \Clicalmani\Foundation\Resources\ViewInterface;
use \Clicalmani\Foundation\Http\RedirectInterface;
use Clicalmani\Foundation\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email = ?', [$request->email])->first();
        
        if (NULL !== $user) {
            if (password_verify($request->password, $user->password)) {
                session()->set('user:id', $user->id);
                return redirect('/dashboard');
            }
        }

        return redirect()->route('home')->with('error', 'Adresse email ou mot de passe incorrect');
    }

    public function logout(Request $request)
    {
        session()->destroy();
        return redirect()->route('home');
    }
}