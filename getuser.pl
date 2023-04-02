use LWP;
my $http_client = LWP::UserAgent->new;            # HTTP client
my $url = 'https://www.bibsonomy.org/user/aksw?format=json';

$http_client->credentials(                        # HTTP authentication
  'www.bibsonomy.org:80',
    'BibSonomyWebService',
      'jonaswagner242' => '770c0c4361f3a7fadfada01e775e827d'
      );

my $response = $http_client->get($url);           # send request to API

# You can set path to save response here
print $response->content;