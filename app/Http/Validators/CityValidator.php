<?php
namespace App\Http\Validators;

class CityValidator extends \Clicalmani\Validation\Rule
{
    /**
     * Rule argument
     * 
     * @var string
     */
    protected static string $argument = "city";

    /**
     * Rule options
     * 
     * @return array
     */
    public function options() : array
    {
        return [
            'departement' => [
                'required' => false,
                'type' => 'string',
            ]
        ];
    }

    /**
     * Validate input
     * 
     * @param mixed &$value Input value
     * @return bool
     */
    public function validate(mixed &$value) : bool
    {
        $benin_cities = [
            "Abomey", "Abomey-Calavi", "Adjohoun", "Aguégués", "Akpro-Missérété", "Allada", 
            "Bantè", "Bassila", "Bembèrèkè", "Bohicon", "Cotonou", "Dassa-Zoumè", 
            "Djougou", "Dogbo-Tota", "Grand-Popo", "Guézin", "Kandi", "Kétou", 
            "Lokossa", "Malanhoui", "Natitingou", "Ouidah", "Parakou", 
            "Pobè", "Porto-Novo", "Savalou", "Savé", "Tanguieta", 
            "Toffo", "Tori-Bossito", "Vakon"
        ];

        $benin_cities_by_deparment = [
            "Atlantique" => ["Abomey-Calavi", "Allada", "Kpomassè", "Ouidah", "Toffo", "Tori-Bossito"],
            "Borgou" => ["Bembèrèkè", "Kalalé", "Kandi", "Nikki", "Parakou", "Pèrèrè"],
            "Collines" => ["Bantè", "Dassa-Zoumè", "Glazoué", "Ouèssè", "Savalou", "Savé"],
            "Couffo" => ["Aplahoué", "Djakotomey", "Dogbo-Tota", "Klouékanmè", "Lalo", "Toviklin"],
            "Donga" => ["Bassila", "Copargo", "Djougou", "Ouaké"],
            "Littoral" => ["Cotonou"],
            "Mono" => ["Athiémè", "Comè", "Grand-Popo", "Houéyogbé", "Lokossa"],
            "Ouémé" => ["Adjohoun", "Aguégués", "Akpro-Missérété", "Avrankou", "Bonou", "Porto-Novo"],
            "Plateau" => ["Ifangni", "Kétou", "Pobè"],
            "Zou" => ["Abomey", "Bohicon", "Covè", "Djidja", "Ouinhi"]
        ];

        if (isset($this->options['departement'])) {
            $departement = $this->options['departement'];
            if (is_string($departement) && array_key_exists($departement, $benin_cities_by_deparment)) {
                $benin_cities = $benin_cities_by_deparment[$departement];

                if (in_array($value, $benin_cities)) {
                    $value = strtoupper($value);
                    return true;
                }
            }

            return false;
        }

        if (!is_string($value) || !in_array($value, $benin_cities)) {
            return false;
        }

        $value = strtoupper($value);

        return true;
    }

    /**
     * Gets the custom error message.
     * 
     * @return string
     */
    public function message() : ?string
    {
        return "Le champ :attribute doit être une ville valide du Bénin.";
    }
}
